package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.navigation.Navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.R
import com.infinity.socialify.data.CommunityRecommendation
import com.infinity.socialify.databinding.ItemRowCommunityRecommendationBinding

class CommunityRecommendationListAdapter(private val communityRecommendation: ArrayList<CommunityRecommendation>) : RecyclerView.Adapter<CommunityRecommendationListAdapter.CommunityRecommendationViewHolder>() {
  class CommunityRecommendationViewHolder(binding: ItemRowCommunityRecommendationBinding) : RecyclerView.ViewHolder(binding.root) {
    val recProPic = binding.recommendationProfilePictureImageView
    val recTitle = binding.recommendationTitleTextView
    val recMembers = binding.recommendationMembersTextView
    val recRating = binding.recommendationRatingTextView
    val recBtn = binding.recommendationDetailCommunityButton
  }

  override fun onCreateViewHolder(
    parent: ViewGroup,
    viewType: Int
  ): CommunityRecommendationViewHolder {
    val binding = ItemRowCommunityRecommendationBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return CommunityRecommendationViewHolder(binding)
  }

  override fun getItemCount(): Int {
    return 3
  }

  override fun onBindViewHolder(holder: CommunityRecommendationViewHolder, position: Int) {
    val (propicture, title, members, rating) = communityRecommendation[position]

    holder.recProPic.setImageResource(propicture)
    holder.recTitle.text = title
    holder.recMembers.text = members + " anggota"
    holder.recRating.text = rating

    holder.recBtn.setOnClickListener {
      val navController = findNavController(holder.itemView)
      navController.navigate(R.id.navigation_short_info_community)
    }
  }
}