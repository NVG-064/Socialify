package com.infinity.socialify

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.databinding.FragmentMenuKomunitasBinding

class MenuKomunitasFragment : Fragment() {

    private var _binding: FragmentMenuKomunitasBinding ?= null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentMenuKomunitasBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

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
            navController.navigate(R.id.navigation_community_reviews)
        }

        binding.btnKeluarKomunitas.setOnClickListener {
            startActivity(Intent(binding.root.context, MainActivity::class.java))
            activity?.finish()
        }
    }
}