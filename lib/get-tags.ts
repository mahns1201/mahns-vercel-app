import { retrieveNotionDatabases } from '../apis/retrieve-notion-databases';

export const getTags = async () => {
  const tagsProperty = (await retrieveNotionDatabases()).properties.Tags;

  if (tagsProperty.type === 'multi_select') {
    const options = tagsProperty.multi_select.options;
    return options.map((option) => option.name);
  }

  return [];
};
