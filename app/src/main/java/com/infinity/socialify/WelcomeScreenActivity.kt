package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Window
import android.view.WindowManager
import android.widget.Button

class WelcomeScreenActivity : AppCompatActivity() {

  private lateinit var welcomeNextButton: Button

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    supportRequestWindowFeature(Window.FEATURE_NO_TITLE)
    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_welcome_screen)

    welcomeNextButton = findViewById(R.id.welcomeNextButton)

    welcomeNextButton.setOnClickListener {
      startActivity(Intent(this, AppStatementOne::class.java))
    }
  }
}