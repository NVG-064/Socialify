package com.infinity.socialify.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.navigation.Navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.infinity.socialify.R
import com.infinity.socialify.data.Notification
import com.infinity.socialify.databinding.ItemRowNotificationBinding

class NotificationListAdapter(private val notification: ArrayList<Notification>) : RecyclerView.Adapter<NotificationListAdapter.NotificationViewHolder>() {
  class NotificationViewHolder(binding: ItemRowNotificationBinding) : RecyclerView.ViewHolder(binding.root) {
    val notProPic = binding.profileNotificationImageView
    val notContent = binding.contentNotificationTextView
    val notTime = binding.timeReceivedNotificationTextView
    val notLayout = binding.notificationRelativeLayout
  }

  override fun onCreateViewHolder(
    parent: ViewGroup,
    viewType: Int
  ): NotificationViewHolder {
    val binding = ItemRowNotificationBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    return NotificationViewHolder(binding)
  }

  override fun getItemCount(): Int {
    return notification.size
  }

  override fun onBindViewHolder(holder: NotificationViewHolder, position: Int) {
    val (propic, content, time, postId) = notification[position]

    holder.notProPic.setImageResource(propic)
    holder.notContent.text = content
    holder.notTime.text = time

    holder.notLayout.setOnClickListener {
      val navController = findNavController(holder.itemView)
      navController.navigate(R.id.navigation_detail_post)
    }
  }
}
