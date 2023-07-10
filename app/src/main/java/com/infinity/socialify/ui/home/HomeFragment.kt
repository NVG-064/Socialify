package com.infinity.socialify.ui.home

import android.content.ContentValues.TAG
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.Spinner
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.Query
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.infinity.socialify.R
import com.infinity.socialify.adapter.LeaderboardCommunityListAdapter
import com.infinity.socialify.data.LeaderboardCommunity
import com.infinity.socialify.databinding.FragmentHomeBinding

class HomeFragment : Fragment() {

  private var _binding: FragmentHomeBinding? = null
  private lateinit var auth: FirebaseAuth
//  private var leaderboardCommunityData = ArrayList<LeaderboardCommunity>()

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

//    auth = FirebaseAuth.getInstance()
//    val db = Firebase.firestore
//
//    val communitiesRef = db.collection("communities")
//
//    communitiesRef.orderBy("tag").whereEqualTo("tag", "pemrograman").get()
//      .addOnSuccessListener { result ->
//        for (document in result) {
//          Log.d(TAG, "${document.id} = ${document.data}")
//        }
//      }

    val navController = findNavController()
    val spinner: Spinner = binding.sortByHomeSpinner

    // Create an ArrayAdapter using the string array and a default spinner layout
    ArrayAdapter.createFromResource(
      this.requireContext(),
      R.array.sort_by_array,
      android.R.layout.simple_spinner_item
    ).also { adapter ->
      // Specify the layout to use when the list of choices appears
      adapter.setDropDownViewResource(android.R.layout.simple_spinner_item)

      // Apply the adapter to the spinner
      spinner.adapter = adapter
    }

    binding.homeSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }
//  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
//    super.onViewCreated(view, savedInstanceState)
//
//    /**
//     * To binding, id must be camelCase
//     * Moved to below section
//     */
//    binding.rvPapanPeringkat.setHasFixedSize(true)
//
//    // Add all data to onCreate() and show the RecyclerView
//    leaderboardCommunityData.addAll(leaderboardCommunityList)
//    showRecyclerView()
//  }

//  private val leaderboardCommunityList: ArrayList<LeaderboardCommunity>
//    get() {
//      val dataPosition = resources.obtainTypedArray(R.array.data_community_leaderboard_position)
//      val dataImage = resources.obtainTypedArray(R.array.data_community_leaderboard_picture)
//      val dataTitle = resources.getStringArray(R.array.data_community_leaderboard_title)
//      val dataMember = resources.getStringArray(R.array.data_community_leaderboard_total_members)
//      val dataRating = resources.getStringArray(R.array.data_community_leaderboard_rating)
//      val dataCategory = resources.getStringArray(R.array.data_community_leaderboard_category)
//
//      val dataList = ArrayList<LeaderboardCommunity>()
//
//      for (i in dataTitle.indices) {
//        val leaderboardCom = LeaderboardCommunity(
//          dataPosition.getResourceId(i, -1),
//          dataImage.getResourceId(i, -1),
//          dataTitle[i],
//          dataMember[i],
//          dataRating[i],
//          dataCategory[i]
//        )
//
//        /**
//         * Check data
//         */
//        if (leaderboardCommunityData.size < 3) dataList.add(leaderboardCom)
//      }
//
//      return dataList
//    }

//  private fun showRecyclerView() {
//    binding.rvPapanPeringkat.apply {
//      layoutManager = LinearLayoutManager(requireContext())
//      adapter = LeaderboardCommunityListAdapter(leaderboardCommunityData)
////      setHasFixedSize(true)
//    }
//  }

  override fun onDestroyView() {
    super.onDestroyView()
    _binding = null
  }
}