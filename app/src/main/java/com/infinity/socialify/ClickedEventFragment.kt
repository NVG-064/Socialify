package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.databinding.FragmentClickedEventBinding

class ClickedEventFragment : Fragment() {

  private var _binding: FragmentClickedEventBinding ?= null
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentClickedEventBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.eventInfoBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.eventInfoSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }

    binding.btnGabungLive.setOnClickListener {
      navController.navigate(R.id.navigation_event_on_start)
    }
  }
}