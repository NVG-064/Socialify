package com.infinity.socialify.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.R
import com.infinity.socialify.adapter.LeaderboardCommunityListAdapter
import com.infinity.socialify.data.LeaderboardCommunity
import com.infinity.socialify.databinding.FragmentHomeBinding

class HomeFragment : Fragment() {

  private var _binding: FragmentHomeBinding? = null
  private var leaderboardCommunityData = ArrayList<LeaderboardCommunity>()

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    val homeViewModel =
      ViewModelProvider(this).get(HomeViewModel::class.java)

    _binding = FragmentHomeBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    /**
     * To binding, id must be camelCase
     * Moved to below section
     */
    binding.rvPapanPeringkat.setHasFixedSize(true)

    // Add all data to onCreate() and show the RecyclerView
    leaderboardCommunityData.addAll(leaderboardCommunityList)
    showRecyclerView()
  }

  private val leaderboardCommunityList: ArrayList<LeaderboardCommunity>
    get() {
      val dataPosition = resources.obtainTypedArray(R.array.data_community_leaderboard_position)
      val dataImage = resources.obtainTypedArray(R.array.data_community_leaderboard_picture)
      val dataTitle = resources.getStringArray(R.array.data_community_leaderboard_title)
      val dataMember = resources.getStringArray(R.array.data_community_leaderboard_total_members)
      val dataRating = resources.getStringArray(R.array.data_community_leaderboard_rating)
      val dataCategory = resources.getStringArray(R.array.data_community_leaderboard_category)

      val dataList = ArrayList<LeaderboardCommunity>()

      for (i in dataTitle.indices) {
        val leaderboardCom = LeaderboardCommunity(
          dataPosition.getResourceId(i, -1),
          dataImage.getResourceId(i, -1),
          dataTitle[i],
          dataMember[i],
          dataRating[i],
          dataCategory[i]
        )

        /**
         * Check data
         */
        if (leaderboardCommunityData.size < 3) dataList.add(leaderboardCom)
      }

      return dataList
    }

  private fun showRecyclerView() {
    binding.rvPapanPeringkat.apply {
      layoutManager = LinearLayoutManager(requireContext())
      adapter = LeaderboardCommunityListAdapter(leaderboardCommunityData)
//      setHasFixedSize(true)
    }
  }

  override fun onDestroyView() {
    super.onDestroyView()
    _binding = null
  }
}