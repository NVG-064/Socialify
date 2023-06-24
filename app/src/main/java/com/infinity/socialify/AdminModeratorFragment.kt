package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.adapter.CommunityAdminModeratorsListAdapter
import com.infinity.socialify.data.CommunityAdminModerators
import com.infinity.socialify.databinding.FragmentAdminModeratorBinding

class AdminModeratorFragment : Fragment() {

  private var _binding: FragmentAdminModeratorBinding ? = null
  private var communityAdminModeratorsData = ArrayList<CommunityAdminModerators>()

  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentAdminModeratorBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    communityAdminModeratorsData.addAll(communityAdminModeratorsList)
    showRecyclerView()

    val navController = findNavController()

    binding.communityAdminModeratorsBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.communityAdminModeratorsSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }

  private val communityAdminModeratorsList: ArrayList<CommunityAdminModerators>
    get() {
      val dataImage = resources.obtainTypedArray(R.array.data_admods_profile_picture)
      val dataName = resources.getStringArray(R.array.data_admods_title)
      val dataRoles = resources.getStringArray(R.array.data_admods_roles)

      val dataList = ArrayList<CommunityAdminModerators>()

      for (i in dataName.indices) {
        val communityAdmods = CommunityAdminModerators(
          dataImage.getResourceId(i, -1),
          dataName[i],
          dataRoles[i]
        )

        if (communityAdminModeratorsData.size < dataName.size) dataList.add(communityAdmods)
      }

      return dataList
    }

  private fun showRecyclerView() {
    binding.rvListAdmin.apply {
      layoutManager = LinearLayoutManager(requireContext())
      adapter = CommunityAdminModeratorsListAdapter(communityAdminModeratorsData)
      setHasFixedSize(true)
    }
  }
}