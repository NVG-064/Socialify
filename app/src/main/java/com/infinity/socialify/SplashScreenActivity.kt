package com.infinity.socialify

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.view.Window
import android.view.WindowManager
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser


class SplashScreenActivity : AppCompatActivity() {

  private lateinit var auth: FirebaseAuth

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    supportRequestWindowFeature(Window.FEATURE_NO_TITLE)
    window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN)

    setContentView(R.layout.activity_splash_screen)

    auth = FirebaseAuth.getInstance()

    updateUI(auth.currentUser)
  }

//  override fun onStart() {
//    super.onStart()
//
//    // Check if user is signed in (non-null) and update UI accordingly.
//    val currentUser = auth.currentUser
//    updateUI(currentUser)
//  }

  //Change UI according to user data.
  private fun updateUI(account: FirebaseUser?) {
    if (account != null) {
      Toast.makeText(this, auth.currentUser!!.email.toString(), Toast.LENGTH_SHORT).show()
      startActivity(Intent(this, MainActivity::class.java))
      finish()
    } else {
      Handler().postDelayed(Runnable {
        startActivity(Intent(this, WelcomeScreenActivity::class.java))
        finish()
      }, 2000)
    }
  }
}