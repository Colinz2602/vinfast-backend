import type { Schema, Struct } from '@strapi/strapi';

export interface CarDescription extends Struct.ComponentSchema {
  collectionName: 'components_car_descriptions';
  info: {
    displayName: 'content_block';
  };
  attributes: {
    content_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    content_text: Schema.Attribute.Text;
    layout_style: Schema.Attribute.Enumeration<
      ['media_text_section1', 'media_text_section2', 'media_text_section3']
    >;
  };
}

export interface CarGeneralSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_car_general_specifications';
  info: {
    displayName: 'general_specifications';
  };
  attributes: {
    acceleration_time: Schema.Attribute.String;
    battery: Schema.Attribute.String;
    capacity: Schema.Attribute.String;
    charging_time: Schema.Attribute.String;
    distance_charge: Schema.Attribute.String;
    guarantee: Schema.Attribute.String;
    number_of_seats: Schema.Attribute.String;
    powerful_operation: Schema.Attribute.String;
  };
}

export interface CarImages extends Struct.ComponentSchema {
  collectionName: 'components_car_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CarPromotion extends Struct.ComponentSchema {
  collectionName: 'components_car_promotions';
  info: {
    displayName: 'promotion';
  };
  attributes: {
    promotion_description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'car.description': CarDescription;
      'car.general-specifications': CarGeneralSpecifications;
      'car.images': CarImages;
      'car.promotion': CarPromotion;
    }
  }
}
