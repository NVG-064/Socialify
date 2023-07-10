package com.infinity.socialify

import android.content.ContentValues.TAG
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.DocumentChange
import com.google.firebase.firestore.Query
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.infinity.socialify.databinding.FragmentClickedCommunityBinding

class ClickedCommunityFragment : Fragment() {

  private var _binding: FragmentClickedCommunityBinding? = null
  private val binding get() = _binding!!
  private var args: Bundle ?= null
  private lateinit var auth: FirebaseAuth
  private val db = Firebase.firestore
  private val communitiesRef = db.collection("communities")
//  private var membersId = arrayListOf<String>()

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentClickedCommunityBinding.inflate(inflater, container, false)
    args = this.arguments
    auth = FirebaseAuth.getInstance()
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

//    communitiesRef.document(args?.getString("communityId")!!).collection("communityMember")
//      .addSnapshotListener { value, error ->
//        if (error != null)
//        {
//          Log.e("Firestore Error: ", error.message.toString())
//          return@addSnapshotListener
//        }
//
//        value?.documentChanges!!.forEachIndexed { index, documentChange ->
//          if (documentChange.type == DocumentChange.Type.ADDED) {
//            membersId[index] = documentChange.document.id
////            Log.d("FirebaseResult: ", leaderboardCommunityData[index].toString())
//          }
//        }
//      }
//
//    Log.d("CommunityMembersId: ", membersId.size.toString())

    updateFromFirestore()
//    updateButton()

    val navController = findNavController()

    binding.btnGabung.setOnClickListener {
      if (binding.btnGabung.text == "Gabung") {
//        updateButton()
        val bundle = Bundle()
        bundle.putString("communityId", args?.getString("communityId")!!)
        val fragment = FormGabungFragment()
        fragment.arguments = bundle
        navController.navigate(R.id.navigation_join_form_community, bundle)
      }
//      } else {
//        val bundle = Bundle()
//        bundle.putString("communityId", args?.getString("communityId")!!)
//        val fragment = CommunityFragment()
//        fragment.arguments = bundle
//        navController.navigate(R.id.navigation_discussion_community, bundle)
//      }
    }

    binding.shortInfoBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.shortInfoSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }

  private fun updateFromFirestore() {
    communitiesRef.document(args?.getString("communityId")!!).get()
      .addOnSuccessListener{ document ->
        if (document != null) {
          binding.namaKomunitas.text = document.data?.get("name")?.toString()
          binding.jumlahAnggota.text = document.data?.get("member")?.toString() + " anggota"
          binding.tvRatingKomunitas.text = document.data?.get("rating")?.toString()
          binding.tvTentang.text = document.data?.get("desc")?.toString()
          binding.tvRiwayat.text = document.data?.get("history")?.toString()
        } else {
          Log.d(TAG, "No such document")
        }
      }
      .addOnFailureListener { exception ->
        Log.d(TAG, "get failed with ", exception)
      }
  }

//  private fun updateButton() {
//    for (element in membersId) {
//      if (element == auth.currentUser!!.uid) {
//        binding.btnGabung.text = "Lihat"
//        break
//      }
//    }
//  }
}