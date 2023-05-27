package com.infinity.socialify

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler

class SplashScreenActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    Handler().postDelayed(Runnable {
      startActivity(Intent(this@SplashScreenActivity, MainActivity::class.java))
      finish()
    }, 3000)
  }
}