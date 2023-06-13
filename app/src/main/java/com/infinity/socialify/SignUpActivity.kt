package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Patterns
import android.view.WindowManager
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.infinity.socialify.databinding.ActivitySignUpBinding

class SignUpActivity : AppCompatActivity() {
  private lateinit var binding: ActivitySignUpBinding
  private lateinit var auth: FirebaseAuth

//  private lateinit var clickableSignInNowTextView: TextView
//  private lateinit var signUpSUButton: Button
//  private lateinit var nameInputEditText: EditText
//  private lateinit var emailInputEditText: EditText
//  private lateinit var passwordInputEditText: EditText
//  private lateinit var confirmPasswordInputEditText: EditText

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    binding = ActivitySignUpBinding.inflate(layoutInflater)
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(binding.root)

    auth = FirebaseAuth.getInstance()

    binding.clickableSignInNowTextView.setOnClickListener {
      startActivity(Intent(this, SignInActivity::class.java))
    }

    binding.signUpSUButton.setOnClickListener {
      val username = binding.nameInputEditText.text.toString()
      val email = binding.emailInputEditText.text.toString()
      val password = binding.passwordInputEditText.text.toString()
      val rePassword = binding.confirmPasswordInputEditText.text.toString()

      if (username.isEmpty()) {
        binding.nameInputEditText.error = "Tidak boleh kosong"
        binding.nameInputEditText.requestFocus()
        return@setOnClickListener
      }

      if (email.isEmpty()) {
        binding.emailInputEditText.error = "Tidak boleh kosong"
        binding.emailInputEditText.requestFocus()
        return@setOnClickListener
      }

      if (password.isEmpty()) {
        binding.passwordInputEditText.error = "Tidak boleh kosong"
        binding.passwordInputEditText.requestFocus()
        return@setOnClickListener
      }

      if (rePassword.isEmpty()) {
        binding.confirmPasswordInputEditText.error = "Tidak boleh kosong"
        binding.confirmPasswordInputEditText.requestFocus()
        return@setOnClickListener
      }

      if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
        binding.emailInputEditText.error = "Email tidak valid"
        binding.emailInputEditText.requestFocus()
        return@setOnClickListener
      }

      if (password.length < 8) {
        binding.passwordInputEditText.error = "Setidaknya berisi 8 karakter, angka, atau karakter spesial"
        binding.passwordInputEditText.requestFocus()
        return@setOnClickListener
      }

      if (password != rePassword) {
        binding.confirmPasswordInputEditText.error = "Kata sandi tidak cocok"
        binding.confirmPasswordInputEditText.requestFocus()
        return@setOnClickListener
      }

      signUpFirebase(email, password)
    }
  }

  private fun signUpFirebase(email: String, password: String) {
    auth.createUserWithEmailAndPassword(email, password)
      .addOnCompleteListener(this) {
        if (it.isSuccessful) {
          Toast.makeText(this, "Berhasil daftar", Toast.LENGTH_SHORT).show()
          startActivity(Intent(this, SignInActivity::class.java))
        } else if (it.exception?.message!!.contains("already in use", true)) {
          binding.emailInputEditText.error = "Email sudah digunakan"
          binding.emailInputEditText.requestFocus()
        } else {
          Toast.makeText(this, "${it.exception?.message}", Toast.LENGTH_SHORT).show()
        }
      }
  }
}