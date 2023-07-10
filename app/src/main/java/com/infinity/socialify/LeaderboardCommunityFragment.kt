package com.infinity.socialify

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.firebase.firestore.DocumentChange
import com.google.firebase.firestore.Query
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.infinity.socialify.adapter.LeaderboardCommunityListAdapter
import com.infinity.socialify.data.LeaderboardCommunity
import com.infinity.socialify.databinding.FragmentLeaderboardCommunityBinding

class LeaderboardCommunityFragment : Fragment() {

  private var _binding: FragmentLeaderboardCommunityBinding? = null
  private var leaderboardCommunityData = ArrayList<LeaderboardCommunity>()
//  private var dataComId = arrayOf<String>()

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentLeaderboardCommunityBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    /**
     * To binding, id must be camelCase
     * Moved to below section
     */
//    binding.rvPapanPeringkat.setHasFixedSize(true)

    // Add all data to onCreate() and show the RecyclerView
//    leaderboardCommunityData.addAll(leaderboardCommunityList)
//    showRecyclerView()
    binding.rvPapanPeringkat.layoutManager = LinearLayoutManager(requireContext())
    binding.rvPapanPeringkat.setHasFixedSize(true)

    leaderboardCommunityData.addAll(leaderboardCommunityList)
    binding.rvPapanPeringkat.adapter = LeaderboardCommunityListAdapter(leaderboardCommunityData)

    eventChangeListener()
  }

  private fun eventChangeListener() {
    val db = Firebase.firestore

    val communitiesRef = db.collection("communities")
    communitiesRef.orderBy("rating", Query.Direction.DESCENDING)
      .addSnapshotListener { value, error ->
        if (error != null)
        {
          Log.e("Firestore Error: ", error.message.toString())
          return@addSnapshotListener
        }

        value?.documentChanges!!.forEachIndexed { index, documentChange ->
          if (documentChange.type == DocumentChange.Type.ADDED && index < leaderboardCommunityData.size) {
            leaderboardCommunityData[index].communityId = documentChange.document.id.toString()
            leaderboardCommunityData[index].title = documentChange.document.data["name"].toString()
            leaderboardCommunityData[index].member = documentChange.document.data["member"].toString()
            leaderboardCommunityData[index].rating = documentChange.document.data["rating"].toString()
            leaderboardCommunityData[index].category = documentChange.document.data["tag"].toString()
//            Log.d("FirebaseResult: ", leaderboardCommunityData[index].toString())
          }
        }
        binding.rvPapanPeringkat.adapter?.notifyDataSetChanged()
      }
  }

//  private val getCommunityId: ArrayList<String>
//    get() {
//      val dataList = ArrayList<String>()
//
//      auth = FirebaseAuth.getInstance()
//      val db = Firebase.firestore
//
//      val communitiesRef = db.collection("communities")
//
//      communitiesRef.orderBy("tag").whereEqualTo("tag", "pemrograman").get()
//        .addOnSuccessListener { result ->
//          result.forEachIndexed { index, document ->
//            dataList[index] = document.id
//          }
//        }
//
//      return dataList
//    }

  private val leaderboardCommunityList: ArrayList<LeaderboardCommunity>
    get() {
      val dataPosition = resources.obtainTypedArray(R.array.data_community_leaderboard_position)
      val dataImage = resources.obtainTypedArray(R.array.data_community_leaderboard_picture)
      val dataTitle = resources.getStringArray(R.array.data_community_leaderboard_title)
      val dataMember = resources.getStringArray(R.array.data_community_leaderboard_total_members)
      val dataRating = resources.getStringArray(R.array.data_community_leaderboard_rating)
      val dataCategory = resources.getStringArray(R.array.data_community_leaderboard_category)
      val dataCommunityId = resources.getStringArray(R.array.data_community_leaderboard_title)
//      var dataCommunityId: Array<String>

      val dataList = ArrayList<LeaderboardCommunity>()

//      val db = Firebase.firestore
//      val communitiesRef = db.collection("communities")
//
//      communitiesRef.orderBy("tag").whereEqualTo("tag", "pemrograman").get()
//        .addOnSuccessListener { result ->
//          result.forEachIndexed { index, document ->
//            Log.d(TAG, "${document.id} ($index) => ${document.data}")
//            dataCommunityId[index] = document.id
//          }
//        }

      for (i in dataTitle.indices) {
        val leaderboardCom = LeaderboardCommunity(
          dataPosition.getResourceId(i, -1),
          dataImage.getResourceId(i, -1),
          dataTitle[i],
          dataMember[i],
          dataRating[i],
          dataCategory[i],
          dataCommunityId[i]
        )

        /**
         * Check data
         */
        if (leaderboardCommunityData.size < 3) dataList.add(leaderboardCom)
      }

      return dataList
    }

//  private fun showRecyclerView() {
//    binding.rvPapanPeringkat.apply {
//      layoutManager = LinearLayoutManager(requireContext())
//      adapter = LeaderboardCommunityListAdapter(leaderboardCommunityData)
//      setHasFixedSize(true)
//    }
//  }
}