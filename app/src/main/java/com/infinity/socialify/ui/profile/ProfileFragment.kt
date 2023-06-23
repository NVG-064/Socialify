package com.infinity.socialify.ui.profile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.commit
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.R
import com.infinity.socialify.databinding.FragmentProfileBinding
import com.infinity.socialify.ui.home.HomeFragment

class ProfileFragment : Fragment() {

  private var _binding: FragmentProfileBinding ?= null
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentProfileBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    binding.profileSettingsButtonImageView.setOnClickListener {
      val navController = findNavController()
      navController.navigate(R.id.navigation_settings)
    }
  }

}