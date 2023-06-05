package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import android.view.WindowManager
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

class SignUpActivity : AppCompatActivity() {

  private val db = Firebase.firestore

  private lateinit var clickableSignInNowTextView: TextView
  private lateinit var signUpSUButton: Button
  private lateinit var nameInputEditText: EditText
  private lateinit var emailInputEditText: EditText
  private lateinit var passwordInputEditText: EditText
  private lateinit var confirmPasswordInputEditText: EditText

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_sign_up)

    clickableSignInNowTextView = findViewById(R.id.clickableSignInNowTextView)
    signUpSUButton = findViewById(R.id.signUpSUButton)
    nameInputEditText = findViewById(R.id.nameInputEditText)
    emailInputEditText = findViewById(R.id.emailInputEditText)
    passwordInputEditText = findViewById(R.id.passwordInputEditText)
    confirmPasswordInputEditText = findViewById(R.id.confirmPasswordInputEditText)

    clickableSignInNowTextView.setOnClickListener {
      startActivity(Intent(this, SignInActivity::class.java))
    }

    signUpSUButton.setOnClickListener {
      val username = nameInputEditText.text.toString()
      val email = emailInputEditText.text.toString()
      val password = passwordInputEditText.text.toString()
      val rePassword = confirmPasswordInputEditText.text.toString()

      if (TextUtils.isEmpty(username) || TextUtils.isEmpty(email) || TextUtils.isEmpty(password) || TextUtils.isEmpty(rePassword)) {
        Toast.makeText(this, "Please fill the blank field", Toast.LENGTH_SHORT).show()
      } else {
        if (password == rePassword) {
          val account = hashMapOf(
            "username" to username,
            "email" to email,
            "pass" to password
          )

          db.collection("accounts")
            .add(account)
            .addOnFailureListener {
              e -> Toast.makeText(this, "$e", Toast.LENGTH_SHORT).show()
            }

          startActivity(Intent(this, MainActivity::class.java))
        } else {
          Toast.makeText(this, "Password doesn't match", Toast.LENGTH_SHORT).show()
        }
      }
    }
  }
}