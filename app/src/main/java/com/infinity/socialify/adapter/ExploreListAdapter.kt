package com.infinity.socialify.adapter

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.core.content.ContextCompat.startActivity
import androidx.navigation.Navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.MainActivity
import com.infinity.socialify.R
import com.infinity.socialify.data.Explore
import com.infinity.socialify.databinding.ItemRowExploreBinding

/**
 * Adapter with ViewBinding
 */
class ExploreListAdapter(private val explore: ArrayList<Explore>) : RecyclerView.Adapter<ExploreListAdapter.ExploreViewHolder>() {
  class ExploreViewHolder(val binding: ItemRowExploreBinding) : RecyclerView.ViewHolder(binding.root) {
    val expLayout = binding.itemExploreLayout
    val expImage = binding.imageExploreImageView
    val expTitle = binding.titleExploreTextView
  }

  /**
   * Use ViewBinding instead classic method
   */
  override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ExploreViewHolder {
    val binding = ItemRowExploreBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return ExploreViewHolder(binding)
  }

  /**
   * Return the result in Int
   * This required for RecyclerView of how
   * much items need to be rendered to layout
   */
  override fun getItemCount(): Int {
    return explore.size
  }

  /**
   * Take care of this function
   * This must be synced with Tour.kt
   */
  override fun onBindViewHolder(holder: ExploreViewHolder, position: Int) {
    val (image, title) = explore[position]

    holder.expImage.setImageResource(image)
    holder.expTitle.text = title

    holder.expLayout.setOnClickListener {
      holder.expTitle.context.startActivity(Intent(holder.expTitle.context, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP))
    }
  }
}