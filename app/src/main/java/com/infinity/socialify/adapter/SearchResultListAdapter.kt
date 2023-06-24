package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.navigation.Navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.R
import com.infinity.socialify.data.SearchResult
import com.infinity.socialify.databinding.ItemRowSearchResultBinding

class SearchResultListAdapter(private val searchResult: ArrayList<SearchResult>) : RecyclerView.Adapter<SearchResultListAdapter.SearchResultViewHolder>() {
  class SearchResultViewHolder(binding: ItemRowSearchResultBinding) : RecyclerView.ViewHolder(binding.root) {
    val sreCard = binding.resultCardView
    val sreProPic = binding.resultProfilePictureImageView
    val sreTitle = binding.resultTitleTextView
    val sreMembers = binding.resultMembersTextView
  }

  override fun onCreateViewHolder(
    parent: ViewGroup,
    viewType: Int
  ): SearchResultViewHolder {
    val binding = ItemRowSearchResultBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return SearchResultViewHolder(binding)
  }

  override fun getItemCount(): Int {
    return searchResult.size
  }

  override fun onBindViewHolder(holder: SearchResultViewHolder, position: Int) {
    val (propic, title, members) = searchResult[position]

    holder.sreProPic.setImageResource(propic)
    holder.sreTitle.text = title
    holder.sreMembers.text = members + " anggota"

    holder.sreCard.setOnClickListener {
      val navController = findNavController(holder.itemView)
      navController.navigate(R.id.navigation_short_info_community)
    }
  }
}
