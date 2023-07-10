package com.infinity.socialify

import android.content.ContentValues
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
import com.infinity.socialify.databinding.FragmentFormGabungBinding

class FormGabungFragment : Fragment() {

  private var _binding: FragmentFormGabungBinding ?= null
  private var args: Bundle ?= null
  private lateinit var auth: FirebaseAuth
  private val db = Firebase.firestore
  private val communitiesRef = db.collection("communities")
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentFormGabungBinding.inflate(inflater, container, false)
    args = this.arguments
    auth = FirebaseAuth.getInstance()
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.kirimJawaban.setOnClickListener {
      val data = mapOf<String, String>(
        "reason" to binding.questionOneEditText.text.toString(),
        "hope" to binding.questionTwoEditText.text.toString()
      )
      communitiesRef.document(args?.getString("communityId")!!).collection("communityJoinForm").document(auth.currentUser!!.uid).set(data)

      val bundle = Bundle()
      bundle.putString("communityId", args?.getString("communityId")!!)
      val fragment = CommunityFragment()
      fragment.arguments = bundle

      Toast.makeText(requireContext(), "Berhasil gabung komunitas", Toast.LENGTH_SHORT).show()
      navController.navigate(R.id.navigation_discussion_community, bundle)
    }

    binding.joinFormBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.joinFormSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }
}