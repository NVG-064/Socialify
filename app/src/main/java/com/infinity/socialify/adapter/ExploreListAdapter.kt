package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.navigation.Navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.R
import com.infinity.socialify.data.Explore
import com.infinity.socialify.databinding.ItemRowExploreBinding

/**
 * Adapter with ViewBinding
 */
class ExploreListAdapter(private val explore: ArrayList<Explore>) : RecyclerView.Adapter<ExploreListAdapter.ExploreViewHolder>() {
  private lateinit var onClickListener: OnClickListener

  fun setOnClickListener(clickListener: OnClickListener) {
    onClickListener = clickListener
  }

  class ExploreViewHolder(val binding: ItemRowExploreBinding) : RecyclerView.ViewHolder(binding.root)

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

    holder.binding.imageExploreImageView.setImageResource(image)
    holder.binding.titleExploreTextView.text = title

    holder.binding.itemExploreLayout.setOnClickListener {
      val navController = findNavController(holder.itemView)
      navController.navigate(R.id.navigation_home)
    }

    holder.binding.root.isEnabled = explore[position].active

    holder.binding.root.setOnClickListener {

      onClickListener.onClick(position)
    }
  }

  interface OnClickListener {
    fun onClick(
      position: Int
    )
  }
}