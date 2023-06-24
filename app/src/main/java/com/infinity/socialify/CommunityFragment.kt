package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.databinding.FragmentCommunityBinding

class CommunityFragment : Fragment() {

  private var _binding: FragmentCommunityBinding ?= null

  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentCommunityBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.communityPostBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.communityPostLinearLayout.setOnClickListener {
      navController.navigate(R.id.navigation_community_menu)
    }

    binding.communityPostSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }
}