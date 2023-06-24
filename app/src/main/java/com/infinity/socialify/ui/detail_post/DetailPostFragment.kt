package com.infinity.socialify.ui.detail_post

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.lifecycle.ViewModelProvider
import com.infinity.socialify.R
import com.infinity.socialify.databinding.FragmentDetailPostBinding

class DetailPostFragment : Fragment() {

  private var _binding: FragmentDetailPostBinding? = null

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {

//    val detailPostViewModel = ViewModelProvider(this)[DetailPostViewModel::class.java]

    _binding = FragmentDetailPostBinding.inflate(inflater, container, false)

//    val textViewPostId = binding.detailPostTextView
//    detailPostViewModel.text.observe(viewLifecycleOwner) {
//      textViewPostId.text = it
//    }

    return binding.root
  }

}