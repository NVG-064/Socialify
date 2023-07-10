package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.RadioButton
import android.widget.Toast
import androidx.navigation.fragment.findNavController
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.infinity.socialify.databinding.FragmentReviewKomunitasBinding
import java.lang.Exception

class ReviewKomunitasFragment : Fragment() {

  private var _binding: FragmentReviewKomunitasBinding ?= null
  private var rating = 0
  private var args: Bundle ?= null
  private lateinit var auth: FirebaseAuth
  private val db = Firebase.firestore
  private val communitiesRef = db.collection("communities")
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentReviewKomunitasBinding.inflate(inflater, container, false)
    args = this.arguments
    auth = FirebaseAuth.getInstance()
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    val navController = findNavController()

    binding.communityReviewBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.communityReviewSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }

    binding.btnKirimReview.setOnClickListener {
      try {
        val checkedRadioButton = binding.ratingKomunitasRadioGroup.checkedRadioButtonId
        rating = binding.root.findViewById<RadioButton>(checkedRadioButton).text.toString().toInt()

        val bundle = Bundle()
        bundle.putString("communityId", args?.getString("communityId")!!)
        bundle.putString("isReviewDone", true.toString())
        val fragment = MenuKomunitasFragment()
        fragment.arguments = bundle

        Toast.makeText(binding.btnKirimReview.context, "Berhasil dikirim", Toast.LENGTH_LONG).show()
        navController.navigate(R.id.navigation_form_on_complete, bundle)
      } catch (e: Exception) {
        Toast.makeText(binding.btnKirimReview.context, "Rating must not empty", Toast.LENGTH_LONG).show()
      }
    }
  }
}