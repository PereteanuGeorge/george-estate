import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    suprafata: {
      type: Number,
      required: true,
    }, 
    intretinereaMedie: {
      type: Number,
      required: true,
    },
    etaj: {
      type: Number,
      required: true,
    },
    lift: {
      type: Boolean,
      required: true,
    },
    compartimentare: {
      type: String,
      required: true,
    },
    centralaProprie: {
      type: Boolean,
      required: true,
    },
    aerConditionat: {
      type: Boolean,
      required: true,
    },
    acceptaStudenti: {
      type: Boolean,
      required: true,
    },
    animale: {
      type: Boolean,
      required: true,
    },
    balcon: {
      type: Boolean,
      required: true,
    },
    depozit: {
      type: Number,
      required: true,
    },
    durataInchiriat: {
      type: Number,
      required: true,
    },
    fumatori: {
      type: Boolean,
      required: true,
    },
    straini: {
      type: Boolean,
      required: true,
    },
    sector: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
