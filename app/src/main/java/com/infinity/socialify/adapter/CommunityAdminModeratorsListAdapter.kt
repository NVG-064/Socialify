package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.data.CommunityAdminModerators
import com.infinity.socialify.databinding.ListAdminKomunitasBinding

class CommunityAdminModeratorsListAdapter(private val communityAdminModerators: ArrayList<CommunityAdminModerators>) : RecyclerView.Adapter<CommunityAdminModeratorsListAdapter.CommunityAdminModeratorsViewHolder>() {
  class CommunityAdminModeratorsViewHolder(binding: ListAdminKomunitasBinding) : RecyclerView.ViewHolder(binding.root) {
    val camLayout = binding.anggotaKomunitas
    val camProPic = binding.imgProfilAdmin
    val camName = binding.tvNamaAdmin
    val camRole = binding.tvRoleAdmin
  }

  override fun onCreateViewHolder(
    parent: ViewGroup,
    viewType: Int
  ): CommunityAdminModeratorsViewHolder {
    val binding = ListAdminKomunitasBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return CommunityAdminModeratorsViewHolder(binding)
  }

  override fun getItemCount(): Int {
    return communityAdminModerators.size
  }

  override fun onBindViewHolder(holder: CommunityAdminModeratorsViewHolder, position: Int) {
    val (propic, name, role) = communityAdminModerators[position]

    holder.camProPic.setImageResource(propic)
    holder.camName.text = name
    holder.camRole.text = role
  }
}
