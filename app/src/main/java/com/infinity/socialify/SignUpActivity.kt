package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import android.widget.TextView

class SignUpActivity : AppCompatActivity() {

  private lateinit var clickableSignInNowTextView: TextView

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_sign_up)

    clickableSignInNowTextView = findViewById(R.id.clickableSignInNowTextView)

    clickableSignInNowTextView.setOnClickListener {
      startActivity(Intent(this, SignInActivity::class.java))
    }
  }
}