'use strict';

var React = require('react/addons');
var Story = require('../../app/js/components/story.jsx');
var TestUtils = React.addons.TestUtils;
var testUtilsAdditions = require('react-testutils-additions');

  describe('Story component', function () {
    var component;

    beforeEach(function () {
      var element = React.createElement(Story);
      element.props.data = {
        storyTitle: 'front end test title',
        author : 'front end author',
        storyText : 'front end story text'
      };
      component = TestUtils.renderIntoDocument(element);
      });

    it('should display a story', function () {
      expect(component.props.data).toBeDefined();
      expect(component.props.data.storyTitle).toBeDefined();
      expect(component.props.data.storyTitle).toBe('front end test title');
      expect(component.props.data.author).toBe('front end author');
      expect(component.props.data.storyText).toBe('front end story text');
    });

  });
