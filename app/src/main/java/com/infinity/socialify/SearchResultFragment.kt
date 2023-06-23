package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.adapter.SearchResultListAdapter
import com.infinity.socialify.data.SearchResult
import com.infinity.socialify.databinding.FragmentSearchResultBinding

class SearchResultFragment : Fragment() {

  private var _binding: FragmentSearchResultBinding ?= null
  private var searchResultData = ArrayList<SearchResult>()

  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentSearchResultBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    /**
     * To binding, id must be camelCase
     * Moved to showRecyclerView()
     *
     * Add all data to onCreate() and show the RecyclerView
     */
    searchResultData.addAll(searchResultList)
    showRecyclerView()

    val navController = findNavController()

    binding.searchResultBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.searchResultSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }

  private val searchResultList: ArrayList<SearchResult>
    get() {
      val dataImage = resources.obtainTypedArray(R.array.data_search_result_profile_picture)
      val dataTitle = resources.getStringArray(R.array.data_search_result_title)
      val dataMembers = resources.getStringArray(R.array.data_search_result_members)

      val dataList = ArrayList<SearchResult>()

      for (i in dataTitle.indices) {
        val searchRes = SearchResult(
          dataImage.getResourceId(i, -1),
          dataTitle[i],
          dataMembers[i]
        )

        /**
         * Check data
         */
        if (searchResultData.size < dataTitle.size) dataList.add(searchRes)
      }

      return dataList
    }

  private fun showRecyclerView() {
    binding.searchResultRecyclerView.apply {
      layoutManager = LinearLayoutManager(requireContext())
      adapter = SearchResultListAdapter(searchResultData)
      setHasFixedSize(true)
    }
  }
}