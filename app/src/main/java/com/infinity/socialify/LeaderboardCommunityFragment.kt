package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.adapter.LeaderboardCommunityListAdapter
import com.infinity.socialify.data.LeaderboardCommunity
import com.infinity.socialify.databinding.FragmentHomeBinding
import com.infinity.socialify.databinding.FragmentLeaderboardCommunityBinding

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

class LeaderboardCommunityFragment : Fragment() {

  private var _binding: FragmentLeaderboardCommunityBinding? = null
  private var leaderboardCommunityData = ArrayList<LeaderboardCommunity>()

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View? {
    _binding = FragmentLeaderboardCommunityBinding.inflate(inflater, container, false)
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
}