package com.infinity.socialify.ui.detail_post

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class DetailPostViewModel : ViewModel() {

  private val _text = MutableLiveData<String>().apply {
    value = "This is post Fragment"
  }
  val text: LiveData<String> = _text
}