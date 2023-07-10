package com.infinity.socialify

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.infinity.socialify.agora.core.AgoraConfigurations
import com.infinity.socialify.databinding.FragmentEventOnStartBinding
import io.agora.rtc2.ChannelMediaOptions
import io.agora.rtc2.Constants
import io.agora.rtc2.IRtcEngineEventHandler
import io.agora.rtc2.RtcEngine
import io.agora.rtc2.RtcEngineConfig


class EventOnStartFragment : Fragment() {

  private var _binding: FragmentEventOnStartBinding ?= null
  private val PERMISSION_REQ_ID = 22
  private val REQUESTED_PERMISSIONS get() = Manifest.permission.RECORD_AUDIO
  private val agoraConfiguration = AgoraConfigurations()
  private var agoraEngine: RtcEngine ?= null
  private val binding get() = _binding!!

  private fun showMessage(message: String) {
    activity?.runOnUiThread {
      Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }
  }

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    _binding = FragmentEventOnStartBinding.inflate(inflater, container, false)
    return binding.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)

    // If all the permissions are granted, initialize the RtcEngine object and join a channel.
    if (!checkSelfPermission()) {
      ActivityCompat.requestPermissions(requireActivity(),
        arrayOf(REQUESTED_PERMISSIONS), PERMISSION_REQ_ID);
    }

    setupVoiceSDKEngine()
    joinChannel()

    val navController = findNavController()

    binding.onEventBackButtonToolbarImageView.setOnClickListener {
      navController.navigateUp()
    }

    binding.onEventSettingsButtonImageView.setOnClickListener {
      navController.navigate(R.id.navigation_settings)
    }

//    binding.joinLeaveButton.setOnClickListener {
//      if (agoraConfiguration.isJoined) {
//        agoraEngine!!.leaveChannel()
//        binding.joinLeaveButton.setText("Join")
//      } else {
////        joinChannel()
////        binding.joinLeaveButton.setText("Leave")
//      }
//    }
  }

  private fun checkSelfPermission(): Boolean {
    if (ContextCompat.checkSelfPermission(binding.root.context, REQUESTED_PERMISSIONS[0].toString()) != PackageManager.PERMISSION_GRANTED) {
      return false
    }
    return true
  }

  private fun setupVoiceSDKEngine() {
    try {
      val config = RtcEngineConfig()
      config.mContext = activity?.baseContext
      config.mAppId = agoraConfiguration.appId
      config.mEventHandler = mRtcEventHandler
      agoraEngine = RtcEngine.create(config)
    } catch (e: Exception) {
      throw RuntimeException("Check the error.")
    }
  }

  private val mRtcEventHandler: IRtcEngineEventHandler = object : IRtcEngineEventHandler() {
    // Listen for the remote user joining the channel.
    override fun onUserJoined(uid: Int, elapsed: Int) {
//      activity?.runOnUiThread { binding.infoText.setText("Pengguna remote bergabung: $uid") }
    }

    override fun onJoinChannelSuccess(channel: String, uid: Int, elapsed: Int) {
      // Successfully joined a channel
      agoraConfiguration.isJoined = true
      showMessage("Bergabung ke dalam ruangan")
//      activity?.runOnUiThread { binding.infoText.setText("Menunggu pengguna remote untuk bergabung") }
    }

    override fun onUserOffline(uid: Int, reason: Int) {
      // Listen for remote users leaving the channel
      showMessage("Pengguna remote keluar: $uid $reason")
//      if (agoraConfiguration.isJoined) activity?.runOnUiThread { binding.infoText.setText("Menunggu pengguna remote untuk bergabung") }
    }

    override fun onLeaveChannel(stats: RtcStats) {
      // Listen for the local user leaving the channel
//      activity?.runOnUiThread { binding.infoText.setText("Informasi Ruang Event") }
      agoraConfiguration.isJoined = false
    }
  }

  private fun joinChannel() {
    val options = ChannelMediaOptions()
    options.autoSubscribeAudio = true
    // Set both clients as the BROADCASTER.
    options.clientRoleType = Constants.CLIENT_ROLE_BROADCASTER
    // Set the channel profile as BROADCASTING.
    options.channelProfile = Constants.CHANNEL_PROFILE_LIVE_BROADCASTING

    // Join the channel with a temp token.
    // You need to specify the user ID yourself, and ensure that it is unique in the channel.
    agoraEngine!!.joinChannel(agoraConfiguration.token, agoraConfiguration.channelName, agoraConfiguration.uid, options)
  }

////  fun joinLeaveChannel(view: View?) {
////    if (agoraConfiguration.isJoined) {
////      agoraEngine!!.leaveChannel()
////      binding.joinLeaveButton.setText("Join")
////    } else {
////      joinChannel()
////      binding.joinLeaveButton.setText("Leave")
////    }
//  }

  override fun onDestroy() {
    super.onDestroy()
    agoraEngine!!.leaveChannel()

    // Destroy the engine in a sub-thread to avoid congestion
    Thread {
      RtcEngine.destroy()
      agoraEngine = null
    }.start()
  }
}