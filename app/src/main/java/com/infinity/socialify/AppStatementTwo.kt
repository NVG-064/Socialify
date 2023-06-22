package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Window
import android.view.WindowManager
import android.widget.Button
import com.akexorcist.roundcornerprogressbar.RoundCornerProgressBar

class AppStatementTwo : AppCompatActivity() {

  private lateinit var appSTButton: Button
  private lateinit var clickableOneRCP: RoundCornerProgressBar

  @SuppressLint("MissingInflatedId")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    supportRequestWindowFeature(Window.FEATURE_NO_TITLE)
    window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)

    setContentView(R.layout.activity_app_statement_two)

    clickableOneRCP = findViewById(R.id.clickableOneRCP)
    appSTButton = findViewById(R.id.appSTButton)

    appSTButton.setOnClickListener {
      startActivity(Intent(this, AppStatementThree::class.java))
    }
    
    clickableOneRCP.setOnClickListener {
      startActivity(Intent(this, AppStatementOne::class.java))
    }
  }
}