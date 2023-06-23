package com.infinity.socialify.ui.settings

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.SignInActivity
import com.infinity.socialify.databinding.FragmentSettingsBinding

class SettingsFragment : Fragment() {

  private var _binding: FragmentSettingsBinding ?= null

  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentSettingsBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.settingsBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.settingsSignOutButton.setOnClickListener {
      startActivity(Intent(binding.root.context, SignInActivity::class.java))
      activity?.finish()
    }
  }
}