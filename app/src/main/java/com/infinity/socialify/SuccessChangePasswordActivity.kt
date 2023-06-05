package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import android.widget.Button

class SuccessChangePasswordActivity : AppCompatActivity() {

  private lateinit var goToSignInButton: Button

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_success_change_password)

    goToSignInButton = findViewById(R.id.goToSignInButton)

    goToSignInButton.setOnClickListener {
      startActivity(Intent(this, SignInActivity::class.java))
    }
  }
}