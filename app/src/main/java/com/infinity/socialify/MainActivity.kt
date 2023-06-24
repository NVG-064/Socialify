package com.infinity.socialify

import android.os.Bundle
import com.google.android.material.bottomnavigation.BottomNavigationView
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.shape.CornerFamily
import com.google.android.material.shape.MaterialShapeDrawable
import com.infinity.socialify.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

  private lateinit var binding: ActivityMainBinding

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    binding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(binding.root)

    val bottomNavView: BottomNavigationView = binding.navView

    val navController = findNavController(R.id.nav_host_fragment_activity_main)
    bottomNavView.setupWithNavController(navController)

    val radius = resources.getDimension(R.dimen.bottom_navbar_vertical_top_margin)
    val bottomNavViewBg = bottomNavView.background as MaterialShapeDrawable

    bottomNavViewBg.shapeAppearanceModel.toBuilder()
      .setTopRightCorner(CornerFamily.ROUNDED, radius)
      .setTopLeftCorner(CornerFamily.ROUNDED, radius)
      .build()
  }
}