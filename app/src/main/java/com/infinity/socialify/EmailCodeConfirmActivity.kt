package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import android.widget.Button
import android.widget.TextView

class EmailCodeConfirmActivity : AppCompatActivity() {

  private lateinit var confirmEmailConfirmationButton: Button
  private lateinit var clickableSignInNowFWTextView: TextView

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_email_code_confirm)

    confirmEmailConfirmationButton = findViewById(R.id.confirmEmailConfirmationButton)
    clickableSignInNowFWTextView = findViewById(R.id.clickableSignInNowFWTextView)

    confirmEmailConfirmationButton.setOnClickListener {
      startActivity(Intent(this, ResetPasswordActivity::class.java))
    }

    clickableSignInNowFWTextView.setOnClickListener {
      startActivity(Intent(this, SignInActivity::class.java))
    }
  }
}