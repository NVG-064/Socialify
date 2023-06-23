package com.infinity.socialify.ui.search

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.R
import com.infinity.socialify.databinding.FragmentSearchBinding

class SearchFragment : Fragment() {

  private var _binding: FragmentSearchBinding? = null

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
//    val searchViewModel =
//      ViewModelProvider(this).get(SearchViewModel::class.java)

    _binding = FragmentSearchBinding.inflate(inflater, container, false)

//    val textView: TextView = binding.textDashboard
//    searchViewModel.text.observe(viewLifecycleOwner) {
//      textView.text = it
//    }
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.searchSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }

    binding.searchButtonMaterialButton.setOnClickListener {
      navController.navigate(R.id.navigation_search_result)
    }
  }

  override fun onDestroyView() {
    super.onDestroyView()
    _binding = null
  }
}