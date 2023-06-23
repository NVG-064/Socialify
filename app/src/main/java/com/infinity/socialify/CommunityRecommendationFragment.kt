package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.adapter.CommunityRecommendationListAdapter
import com.infinity.socialify.data.CommunityRecommendation
import com.infinity.socialify.databinding.FragmentCommunityRecommendationBinding

class CommunityRecommendationFragment : Fragment() {

  private var _binding: FragmentCommunityRecommendationBinding ?= null
  private var communityRecommendationData = ArrayList<CommunityRecommendation>()

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentCommunityRecommendationBinding.inflate(inflater, container, false)
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
    communityRecommendationData.addAll(communityRecommendationList)
    showRecyclerView()
  }

  private val communityRecommendationList: ArrayList<CommunityRecommendation>
    get() {
      val dataImage = resources.obtainTypedArray(R.array.data_community_recommendation_profile_picture)
      val dataTitle = resources.getStringArray(R.array.data_community_recommendation_title)
      val dataMembers = resources.getStringArray(R.array.data_community_recommendation_members)
      val dataRating = resources.getStringArray(R.array.data_community_recommendation_rating)

      val dataList = ArrayList<CommunityRecommendation>()

      for (i in dataTitle.indices) {
        val communityRec = CommunityRecommendation(
          dataImage.getResourceId(i, -1),
          dataTitle[i],
          dataMembers[i],
          dataRating[i]
        )

        /**
         * Check data
         */
        if (communityRecommendationData.size < 3) dataList.add(communityRec)
      }

      return dataList
    }

  private fun showRecyclerView() {
    binding.communityRecommendationRecyclerView.apply {
      layoutManager = LinearLayoutManager(requireContext())
      adapter = CommunityRecommendationListAdapter(communityRecommendationData)
      setHasFixedSize(true)
    }
  }
}