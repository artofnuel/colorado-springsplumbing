import { create } from 'zustand';

// Store for managing form state
export const useFormStore = create((set) => ({
  formData: {
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  },
  setFormField: (field, value) => 
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value
      }
    })),
  resetForm: () => 
    set({
      formData: {
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
      }
    }),
}));

// Store for UI state
export const useUIStore = create((set) => ({
  isContactModalOpen: false,
  setContactModalOpen: (isOpen) => set({ isContactModalOpen: isOpen }),
  activeGalleryImage: null,
  setActiveGalleryImage: (image) => set({ activeGalleryImage: image }),
}));