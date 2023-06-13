package com.infinity.socialify

import android.app.Activity
import android.content.ContentValues.TAG
import android.content.Intent
import android.content.IntentSender
import android.os.Bundle
import android.util.Log
import android.util.Patterns
import android.view.WindowManager
import android.widget.Toast
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.IntentSenderRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.auth.api.identity.BeginSignInRequest
import com.google.android.gms.auth.api.identity.Identity
import com.google.android.gms.auth.api.identity.SignInClient
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.infinity.socialify.databinding.ActivitySignInBinding

class SignInActivity : AppCompatActivity() {
  private lateinit var binding: ActivitySignInBinding
  private lateinit var auth: FirebaseAuth
  private lateinit var oneTapClient: SignInClient
  private lateinit var signInRequest: BeginSignInRequest

  override fun onCreate(savedInstanceState: Bundle?) {
    binding = ActivitySignInBinding.inflate(layoutInflater)
    super.onCreate(savedInstanceState)

    window.setFlags(
      WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
      WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
    )

    setContentView(binding.root)

    auth = FirebaseAuth.getInstance()

    // Initialize Google Sign-in
    oneTapClient = Identity.getSignInClient(this)
    signInRequest = BeginSignInRequest.builder()
      .setGoogleIdTokenRequestOptions(
        BeginSignInRequest.GoogleIdTokenRequestOptions.builder()
          .setSupported(true)
          // Your server's client ID, not your Android client ID.
          .setServerClientId(getString(R.string.web_client_id))
          // Only show accounts previously used to sign in.
          .setFilterByAuthorizedAccounts(false)
          .build())
      .build()

    binding.clickableSignUpNowTextView.setOnClickListener {
      startActivity(Intent(this, SignUpActivity::class.java))
    }

    binding.forgotPasswordSuggestionTextView.setOnClickListener {
      startActivity(Intent(this, ForgotPasswordActivity::class.java))
    }

    binding.signInSIButton.setOnClickListener {
      val email = binding.emailInputSignInEditText.text.toString()
      val password = binding.passwordInputSignInEditText.text.toString()

      if (email.isEmpty()) {
        binding.emailInputSignInEditText.error = "Tidak boleh kosong"
        binding.emailInputSignInEditText.requestFocus()
        return@setOnClickListener
      }

      if (password.isEmpty()) {
        binding.passwordInputSignInEditText.error = "Tidak boleh kosong"
        binding.passwordInputSignInEditText.requestFocus()
        return@setOnClickListener
      }

      if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
        binding.emailInputSignInEditText.error = "Email tidak valid"
        binding.emailInputSignInEditText.requestFocus()
        return@setOnClickListener
      }

      signInFirebase(email, password)
    }

    binding.signInWithGoogleButton.setOnClickListener {
      oneTapClient.beginSignIn(signInRequest)
        .addOnSuccessListener(this) { result ->
          try {
            val intentSenderRequest: IntentSenderRequest = IntentSenderRequest.Builder(result.pendingIntent.intentSender)
              .build()
            activityResultLauncher.launch(intentSenderRequest)
          } catch (e: IntentSender.SendIntentException) {
            Log.e(TAG, "Couldn't start One Tap UI: ${e.localizedMessage}")
          }
        }
        .addOnFailureListener(this) { e ->
          // No saved credentials found. Launch the One Tap sign-up flow, or
          // do nothing and continue presenting the signed-out UI.
          e.localizedMessage?.let { it1 -> Log.d(TAG, it1) }
        }
    }
  }

  private fun signInFirebase(email: String, password: String) {
    auth.signInWithEmailAndPassword(email, password)
      .addOnCompleteListener(this) {
        if (it.isSuccessful) {
          startActivity(Intent(this, MainActivity::class.java))
        } else if (it.exception?.message!!.contains("the password is invalid", true)) {
          binding.emailInputSignInEditText.error = "Email atau kata sandi salah"
          binding.emailInputSignInEditText.requestFocus()
        } else if (it.exception?.message!!.contains("blocked all requests", true)) {
          // Fix "we have blocked all requests blablabla", possible 3 times
        } else {
          Toast.makeText(this, "${it.exception?.message}", Toast.LENGTH_SHORT).show()
        }
      }
  }

  private val activityResultLauncher: ActivityResultLauncher<IntentSenderRequest> = registerForActivityResult(ActivityResultContracts.StartIntentSenderForResult()
  ) {
    if (it.resultCode == Activity.RESULT_OK) {
      try {
        val credential = oneTapClient.getSignInCredentialFromIntent(it.data)
        val idToken = credential.googleIdToken
        val username = credential.id
        val password = credential.password
        when {
          idToken != null -> {
            Toast.makeText(this, "You logged in as $username", Toast.LENGTH_SHORT).show()
            startActivity(Intent(this, MainActivity::class.java))
          }

          password != null -> {
            // Got a saved username and password. Use them to authenticate
            // with your backend.
            Log.d(TAG, "Got password.")
          }

          else -> {
            // Shouldn't happen.
            Log.d(TAG, "No ID token or password!")
          }
        }
      } catch (e: ApiException) {
        e.printStackTrace()
      }
    }
  }
}