package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import android.widget.Button

class ResetPasswordActivity : AppCompatActivity() {

  private lateinit var changePasswordNewPasswordButton: Button

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_reset_password)

    changePasswordNewPasswordButton = findViewById(R.id.changePasswordNewPasswordButton)

    changePasswordNewPasswordButton.setOnClickListener {
      startActivity(Intent(this, SuccessChangePasswordActivity::class.java))
    }
  }
}