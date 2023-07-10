package com.infinity.socialify

import android.content.ContentValues
import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.navigation.fragment.findNavController
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.infinity.socialify.databinding.FragmentMenuKomunitasBinding

class MenuKomunitasFragment : Fragment() {

  private var _binding: FragmentMenuKomunitasBinding ?= null
  private var args: Bundle ?= null
  private lateinit var auth: FirebaseAuth
  private val db = Firebase.firestore
  private val communitiesRef = db.collection("communities")
  private val binding get() = _binding!!
  private var isReviewDone = false

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentMenuKomunitasBinding.inflate(inflater, container, false)
    args = this.arguments
    auth = FirebaseAuth.getInstance()
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    try {
      isReviewDone = args?.getString("isReviewDone")!!.toBoolean()
    } catch (e: Exception) {
//      Toast.makeText(binding.root.context, "", Toast.LENGTH_LONG).show()
    }

    communitiesRef.document(args?.getString("communityId")!!).get()
      .addOnSuccessListener{ document ->
        if (document != null) {
          binding.namaKomunitas.text = document.data?.get("name")?.toString()
          binding.jumlahAnggota.text = document.data?.get("member")?.toString() + " anggota"
          binding.tvRatingKomunitas.text = document.data?.get("rating")?.toString()
        } else {
          Log.d(ContentValues.TAG, "No such document")
        }
      }
      .addOnFailureListener { exception ->
        Log.d(ContentValues.TAG, "get failed with ", exception)
      }

    val navController = findNavController()

    binding.communityMenuBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.communityMenuSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }

    binding.btnDeskripsiKomunitas.setOnClickListener {
      navController.navigate(R.id.navigation_community_information)
    }

    binding.btnAnggota.setOnClickListener {
      navController.navigate(R.id.navigation_community_members)
    }

    binding.btnModeratorAdmin.setOnClickListener {
      navController.navigate(R.id.navigation_community_admins_moderators)
    }

    binding.btnEvent.setOnClickListener {
      navController.navigate(R.id.navigation_community_events)
    }

    binding.btnReviewKomunitas.setOnClickListener {
      val bundle = Bundle()
      bundle.putString("communityId", args?.getString("communityId")!!)
      val fragment = ReviewKomunitasFragment()
      fragment.arguments = bundle

      if (isReviewDone) {
        navController.navigate(R.id.navigation_form_on_complete, args)
      } else {
        navController.navigate(R.id.navigation_community_reviews, bundle)
      }
    }

    binding.btnKeluarKomunitas.setOnClickListener {
      startActivity(Intent(binding.root.context, MainActivity::class.java))
      activity?.finish()
    }
  }
}