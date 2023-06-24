package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.databinding.FragmentFormGabungBinding

class FormGabungFragment : Fragment() {

  private var _binding: FragmentFormGabungBinding ?= null
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentFormGabungBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.kirimJawaban.setOnClickListener {
      navController.navigate(R.id.navigation_discussion_community)
    }

    binding.joinFormBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.joinFormSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }
}