package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.os.bundleOf
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.databinding.FragmentFormOnCompleteBinding

class FormOnCompleteFragment : Fragment() {

  private var _binding: FragmentFormOnCompleteBinding? = null
  private var args: Bundle ?= null
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentFormOnCompleteBinding.inflate(inflater, container, false)
    args = this.arguments
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    binding.formOnCompleteToMenuButton.setOnClickListener {
      val navController = findNavController()

      navController.navigate(R.id.navigation_community_menu, args)
//      navController.popBackStack(R.id.navigation_community_reviews, true)
    }
  }
}