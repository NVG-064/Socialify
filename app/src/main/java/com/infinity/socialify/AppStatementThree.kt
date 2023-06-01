package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Window
import android.view.WindowManager
import android.widget.Button
import com.akexorcist.roundcornerprogressbar.RoundCornerProgressBar

class AppStatementThree : AppCompatActivity() {

  private lateinit var appSTButton: Button
  private lateinit var clickable1RCP: RoundCornerProgressBar
  private lateinit var clickable2RCP: RoundCornerProgressBar

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    supportRequestWindowFeature(Window.FEATURE_NO_TITLE)
    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_app_statement_three)

    appSTButton = findViewById(R.id.appSTButton)
    clickable1RCP = findViewById(R.id.clickable1RCP)
    clickable2RCP = findViewById(R.id.clickable2RCP)

    appSTButton.setOnClickListener {
      startActivity(Intent(this, SignInSignUpActivity::class.java))
    }

    clickable1RCP.setOnClickListener {
      startActivity(Intent(this, AppStatementOne::class.java))
    }

    clickable2RCP.setOnClickListener {
      startActivity(Intent(this, AppStatementTwo::class.java))
    }
  }
}