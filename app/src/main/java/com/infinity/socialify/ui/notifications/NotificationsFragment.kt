package com.infinity.socialify.ui.notifications

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.infinity.socialify.R
import com.infinity.socialify.adapter.NotificationListAdapter
import com.infinity.socialify.data.Notification
import com.infinity.socialify.databinding.FragmentNotificationsBinding

class NotificationsFragment : Fragment() {

  private var _binding: FragmentNotificationsBinding? = null
  private var notificationData = ArrayList<Notification>()

  // This property is only valid between onCreateView and
  // onDestroyView.
  private val binding get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentNotificationsBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    notificationData.addAll(notificationDataList)
    showRecyclerView()

    binding.notificationSettingsButtonImageView.setOnClickListener {
      val navController = findNavController()
      navController.navigate(R.id.navigation_settings)
    }
  }

  private val notificationDataList: ArrayList<Notification>
    get() {
      val dataImage = resources.obtainTypedArray(R.array.data_notification_image)
      val dataContent = resources.getStringArray(R.array.data_notification_title)
      val dataTime = resources.getStringArray(R.array.data_notification_time)
      val dataPostId = resources.getStringArray(R.array.data_notification_post_id)

      val dataList = ArrayList<Notification>()

      for (i in dataContent.indices) {
        val notificationArrayList = Notification(
          dataImage.getResourceId(i, -1),
          dataContent[i],
          dataTime[i],
          dataPostId[i]
        )

        /**
         * Check data
         */
        if (notificationData.size < 8) dataList.add(notificationArrayList)
      }

      return dataList
    }

  private fun showRecyclerView() {
    binding.notificationRecyclerView.apply {
      layoutManager = LinearLayoutManager(requireContext())
      adapter = NotificationListAdapter(notificationData)
      setHasFixedSize(true)
    }
  }

  override fun onDestroyView() {
    super.onDestroyView()
    _binding = null
  }
}