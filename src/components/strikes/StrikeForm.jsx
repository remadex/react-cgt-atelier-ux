/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
const FormStrike = ({ formik }) => (
  <form onSubmit={formik.handleSubmit}>
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div className="grid grid-cols-3 gap-6 gap-y-10">
          <div className="col-span-3 sm:col-span-2 relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom du matériel
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="absolute -bottom-5 text-sm text-red-600">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="col-span-3 sm:col-span-2 relative">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Lien vers l'image du matériel
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                http://
              </span>
              <input
                type="text"
                name="image"
                id="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="focus:ring-sky-500 focus:border-sky-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder="www.example.com"
              />
            </div>
            {formik.touched.image && formik.errors.image && (
              <div className="absolute -bottom-5 text-sm text-red-600">
                {formik.errors.image}
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Décrivez l'objet"
            />
          </div>
          {formik.touched.description && formik.errors.description && (
            <div className="absolute -bottom-5 text-sm text-red-600">
              {formik.errors.description}
            </div>
          )}
        </div>
        <div className="col-span-3 sm:col-span-2 relative">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            id="type"
            name="type"
            autoComplete="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option value="mode">Mode</option>
            <option value="food">Nourriture</option>
            <option value="weapon">Arme</option>
          </select>
          {formik.touched.type && formik.errors.type && (
            <div className="absolute -bottom-5 text-sm text-red-600">
              {formik.errors.type}
            </div>
          )}
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button type="submit" className="btnUi">
          Sauvegarder
        </button>
      </div>
    </div>
  </form>
);

export default FormStrike;
