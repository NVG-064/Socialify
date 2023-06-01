package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import android.widget.Button

class SignInSignUpActivity : AppCompatActivity() {

  private lateinit var signUpButton: Button
  private lateinit var signInButton: Button

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_sign_in_sign_up)

    signUpButton = findViewById(R.id.signUpButton)
    signInButton = findViewById(R.id.signInButton)

    signUpButton.setOnClickListener {
      startActivity(Intent(this, SignUpActivity::class.java))
    }

    signInButton.setOnClickListener {
      startActivity(Intent(this, SignInActivity::class.java))
    }
  }
}