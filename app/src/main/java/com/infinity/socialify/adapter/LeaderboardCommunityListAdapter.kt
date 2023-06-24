package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.Toast
import androidx.navigation.Navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.R
import com.infinity.socialify.data.LeaderboardCommunity
import com.infinity.socialify.databinding.ListPapanPeringkatBinding

class LeaderboardCommunityListAdapter(private val leaderboardCommunity: ArrayList<LeaderboardCommunity>) : RecyclerView.Adapter<LeaderboardCommunityListAdapter.LeaderboardCommunityViewHolder>() {
  class LeaderboardCommunityViewHolder(binding: ListPapanPeringkatBinding) : RecyclerView.ViewHolder(binding.root) {
    val comPosition = binding.imagePositionLeaderboardImageView
    val comProPicture = binding.profilePictureLeaderboardImageView
    val comTitle = binding.titleLeaderboardTextView
    val comMember = binding.totalMemberLeaderboardTextView
    val comRating = binding.ratingLeaderboardTextView
    val comCategory = binding.categoryLeaderboardTextView
    val comLayout = binding.communityLeaderboardCardView
  }

  override fun onCreateViewHolder(
    parent: ViewGroup,
    viewType: Int
  ): LeaderboardCommunityViewHolder {
    val binding = ListPapanPeringkatBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return LeaderboardCommunityViewHolder(binding)
  }

  override fun getItemCount(): Int {
    return leaderboardCommunity.size
  }

  override fun onBindViewHolder(holder: LeaderboardCommunityViewHolder, position: Int) {
    val (positions, propicture, title, member, rating, category) = leaderboardCommunity[position]

    holder.comPosition.setImageResource(positions)
    holder.comProPicture.setImageResource(propicture)
    holder.comTitle.text = title
    holder.comMember.text = member
    holder.comRating.text = rating
    holder.comCategory.text = category

    // Initial development feature
    holder.comLayout.setOnClickListener {
      val navController = findNavController(holder.itemView)
      navController.navigate(R.id.navigation_short_info_community)
    }
  }
}