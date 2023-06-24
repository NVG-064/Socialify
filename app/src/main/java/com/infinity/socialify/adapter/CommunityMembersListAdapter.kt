package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.data.CommunityMembers
import com.infinity.socialify.databinding.ListAnggotaKomunitasBinding

class CommunityMembersListAdapter(private val communityMembers: ArrayList<CommunityMembers>) : RecyclerView.Adapter<CommunityMembersListAdapter.CommunityMembersViewHolder>() {
  class CommunityMembersViewHolder(binding: ListAnggotaKomunitasBinding) : RecyclerView.ViewHolder(binding.root) {
    val cmeLayout = binding.anggotaKomunitas
    val cmeProPic = binding.imgProfilAnggota
    val cmeName = binding.tvNamaAnggota
    val cmeDateJoin = binding.tvRiwayatAnggota
  }

  override fun onCreateViewHolder(
    parent: ViewGroup,
    viewType: Int
  ): CommunityMembersViewHolder {
    val binding = ListAnggotaKomunitasBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return CommunityMembersViewHolder(binding)
  }

  override fun getItemCount(): Int {
    return communityMembers.size
  }

  override fun onBindViewHolder(holder: CommunityMembersViewHolder, position: Int) {
    val (propic, name, date) = communityMembers[position]

    holder.cmeProPic.setImageResource(propic)
    holder.cmeName.text = name
    holder.cmeDateJoin.text = "Bergabung sejak " + date
  }
}
