package com.infinity.socialify

import android.content.ContentValues
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.infinity.socialify.databinding.FragmentCommunityBinding

class CommunityFragment : Fragment() {

  private var _binding: FragmentCommunityBinding ?= null
  private var args: Bundle ?= null
  private lateinit var auth: FirebaseAuth
  private val db = Firebase.firestore
  private val communitiesRef = db.collection("communities")
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentCommunityBinding.inflate(inflater, container, false)
    args = this.arguments
    auth = FirebaseAuth.getInstance()
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    communitiesRef.document(args?.getString("communityId")!!).get()
      .addOnSuccessListener{ document ->
        if (document != null) {
          binding.communityPostLabelToolbarTextView.text = document.data?.get("name")?.toString()
        } else {
          Log.d(ContentValues.TAG, "No such document")
        }
      }
      .addOnFailureListener { exception ->
        Log.d(ContentValues.TAG, "get failed with ", exception)
      }

    val navController = findNavController()

    binding.communityPostBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.communityPostLinearLayout.setOnClickListener {
      val bundle = Bundle()
      bundle.putString("communityId", args?.getString("communityId")!!)
      val fragment = MenuKomunitasFragment()
      fragment.arguments = bundle

      navController.navigate(R.id.navigation_community_menu, bundle)
    }

    binding.communityPostSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }
}