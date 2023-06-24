package com.infinity.socialify

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.adapter.CommunityMembersListAdapter
import com.infinity.socialify.data.CommunityMembers
import com.infinity.socialify.databinding.FragmentAnggotaBinding

class AnggotaFragment : Fragment() {

  private var _binding: FragmentAnggotaBinding ?= null
  private var communityMembersData = ArrayList<CommunityMembers>()

  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentAnggotaBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    communityMembersData.addAll(communityMembersList)
    showRecyclerView()

    val navController = findNavController()

    binding.memberCommunityBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.memberCommunitySettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }
  }

  private val communityMembersList: ArrayList<CommunityMembers>
    get() {
      val dataImage = resources.obtainTypedArray(R.array.data_members_profile_picture)
      val dataTitle = resources.getStringArray(R.array.data_members_title)
      val dataDateJoin = resources.getStringArray(R.array.data_members_date_join)

      val dataList = ArrayList<CommunityMembers>()

      for (i in dataTitle.indices) {
        val communityMem = CommunityMembers(
          dataImage.getResourceId(i, -1),
          dataTitle[i],
          dataDateJoin[i]
        )

        /**
         * Check data
         */
        if (communityMembersData.size < dataTitle.size) dataList.add(communityMem)
      }

      return dataList
    }

  private fun showRecyclerView() {
    binding.rvListAnggota.apply {
      layoutManager = LinearLayoutManager(requireContext())
      adapter = CommunityMembersListAdapter(communityMembersData)
      setHasFixedSize(true)
    }
  }
}