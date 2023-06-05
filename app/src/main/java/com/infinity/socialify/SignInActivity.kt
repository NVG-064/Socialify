package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import android.widget.Button
import android.widget.TextView

class SignInActivity : AppCompatActivity() {

  private lateinit var clickableSignUpNowTextView: TextView
  private lateinit var forgotPasswordSuggestionTextView: TextView
  private lateinit var signInSIButton: Button

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_sign_in)

    forgotPasswordSuggestionTextView = findViewById(R.id.forgotPasswordSuggestionTextView)
    clickableSignUpNowTextView = findViewById(R.id.clickableSignUpNowTextView)
    signInSIButton = findViewById(R.id.signInSIButton)

    clickableSignUpNowTextView.setOnClickListener {
      startActivity(Intent(this, SignUpActivity::class.java))
    }

    forgotPasswordSuggestionTextView.setOnClickListener {
      startActivity(Intent(this, ForgotPasswordActivity::class.java))
    }

    signInSIButton.setOnClickListener {
      startActivity(Intent(this, MainActivity::class.java))
    }
  }
}